import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";

export default function Posts() {
  return (
    <>
      <BackButton text="Back To Dashboard" link="/dashboard" />
      <PostsTable />
      <PostsPagination />
    </>
  );
}
