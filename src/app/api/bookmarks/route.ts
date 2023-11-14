import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { addBookMark, removeBookmark } from "@/service/user";

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("로그인 정보 오류", { status: 401 });
  }

  const { id, bookmark } = await req.json();

  if (!id || bookmark == undefined) {
    return new Response("잘못된 접근 입니다", { status: 400 });
  }

  const request = bookmark ? addBookMark : removeBookmark;

  return request(user.id, id)
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
