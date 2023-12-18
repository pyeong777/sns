import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { addComment } from "@/service/post";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("로그인 정보 오류", { status: 401 });
  }

  const { id, comment } = await req.json();

  if (!id || comment == undefined) {
    return new Response("잘못된 접근 입니다", { status: 400 });
  }

  return addComment(id, user.id, comment)
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
