export default function () {
  return useState("notifs", () => {
    const notifs = ref(["cool"]);
    return notifs;
  });
}
