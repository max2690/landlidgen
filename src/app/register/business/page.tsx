import { redirect } from "next/navigation";
import { SIGNUP_URLS } from "@/lib/start/config";

export default function RegisterBusinessPage() {
  redirect(SIGNUP_URLS.business);
}
