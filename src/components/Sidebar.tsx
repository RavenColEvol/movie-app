import { useQuery } from "@tanstack/react-query";
import SidebarItem from "./SidebarItem";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import Skeleton from "./Skeleton";
import { categoryOpts } from "./api/options";

enum CategoryType {
  upcoming = "upcoming",
  now_playing = "now_playing",
  top_rated = "top_rated",
  popular = "popular",
}

const CATEGORIES = [
  { type: CategoryType.upcoming, title: "Opening this week", open: true },
  { type: CategoryType.now_playing, title: "Now playing" },
  { type: CategoryType.top_rated, title: "Top Rated" },
  { type: CategoryType.popular, title: "Around the web" },
];

export default function Sidebar() {
  const defaultCategoryOptions = categoryOpts(CategoryType.popular);
  const { data, isLoading } = useQuery({
    ...defaultCategoryOptions,
    select: (data) => data[0],
  });
  
  return (
    <>
      <div className="rounded-xl m-2 overflow-hidden">
        {isLoading ? (
          <Skeleton style={{ aspectRatio: "216/121" }} />
        ) : (
          <img
            src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${data.backdrop_path}`}
            alt={data.original_title}
            className="w-full"
          />
        )}
      </div>
      {CATEGORIES.map(({ title, type, open }) => (
        <SidebarItem
          key={type}
          category={type}
          title={title}
          open={Boolean(open)}
        />
      ))}
    </>
  );
}
