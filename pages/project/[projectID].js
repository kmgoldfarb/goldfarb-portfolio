import { useRouter } from "next/router";

export default function ProjectDetail() {
  const router = useRouter();
  const projectID = router.query.projectID;
  return <h1>Project Detail</h1>;
}
