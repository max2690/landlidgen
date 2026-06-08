import { redirect } from "next/navigation";
import { SIGNUP_URLS } from "@/lib/start/config";

export default function RegisterUserPage() {
  redirect(SIGNUP_URLS.executor);
}
