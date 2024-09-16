import { NextRequest, NextResponse } from 'next/server';
import { IGuild } from '../../lib/mongodb/types';
import Guild from '../../lib/mongodb/models/Guild';
import dbConnect from '@/app/lib/mongodb/dbConnect';
import { SortOrder } from 'mongoose';

type ResponseData = {
  success: boolean;
  data?: IGuild[];
  message?: string;
  hasMore: boolean;
};

export async function GET(
  request: NextRequest
): Promise<NextResponse<ResponseData>> {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '16', 10);
  const skip = (page - 1) * limit;

  try {
    await dbConnect();

    const projection = { _id: 1, guildId: 1, name: 1, icon: 1 };
    const sort: { [key: string]: SortOrder } = { _id: 1 };

    const [guilds, totalCount] = await Promise.all([
      Guild.find({}, projection).sort(sort).skip(skip).limit(limit).lean(),
      Guild.countDocuments(),
    ]);

    const hasMore = totalCount > skip + limit;

    const serializedGuilds = guilds.map((guild) => ({
      ...guild,
      _id: guild._id.toString(),
    }));

    return NextResponse.json(
      {
        success: true,
        data: serializedGuilds,
        hasMore,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to fetch guilds:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch guilds', hasMore: false },
      { status: 400 }
    );
  }
}
