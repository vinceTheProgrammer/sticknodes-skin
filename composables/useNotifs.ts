export default function () {
  return useState("notifs", () => {
    const notifs = ref([]);
    return notifs;
  });
}
