import { NextRequest, NextResponse } from 'next/server';
import { IGuild } from '../../lib/mongodb/types';
import Guild from '../../lib/mongodb/models/Guild';
import dbConnect from '@/app/lib/mongodb/dbConnect';

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
    const guilds = await Guild.find({})
      .skip(skip)
      .limit(limit + 1); // 하나 더 가져옵니다

    const hasMore = guilds.length > limit;
    const guildData = hasMore ? guilds.slice(0, limit) : guilds;

    return NextResponse.json(
      {
        success: true,
        data: guildData,
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
