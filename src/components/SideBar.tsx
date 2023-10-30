import { AuthUser } from "@/model/user";
import Avatar from "./Avatar";

type Props = {
  user: AuthUser;
};

export default function SideBar({ user: { name, username, image } }: Props) {
  return (
    <>
      <div className="flex itmes-center">
        {image && <Avatar image={image} />}
        <div className="my-auto ml-4">
          <p className="font-bold">{username}</p>
          <p className="text-neutral-500">{name}</p>
        </div>
      </div>
      <p className="mt-8 text-sm text-neutral-500">
        소개 • 도움말 • API • 개인정보처리방침 • 약관 • 위치 • 언어
      </p>
      <p className="mt-8 text-sm text-neutral-500">
        @2023 Mangoloco from pyeong777
      </p>
    </>
  );
}
