export default function useScrollToLocation(event) {
  event.preventDefault();
  const href = event.target.href;
  const targetId = href.replace(/.*\#/, "");
  const element = document.getElementById(targetId);
  element.scrollIntoView({ behavior: "smooth", block:"start" });
}
