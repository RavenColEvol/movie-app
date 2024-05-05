function Skeleton(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) {
  return <div className="skeleton-box" {...props}></div>;
}

export default Skeleton;
