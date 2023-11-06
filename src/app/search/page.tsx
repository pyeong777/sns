import UserSearch from "@/components/UserSearch";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "유저 검색",
  description: "팔로잉할 사용자를 검색하세요",
};

export default function SearchPage() {
  return <UserSearch />;
}
