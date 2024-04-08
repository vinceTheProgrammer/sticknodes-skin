import { useCurrentUser } from "vuefire";
export default function () {
  return useState("hasRoles", () => {
    const hasAdmin = async () => {
      const isAdmin = ref(false);
      const user = await useCurrentUser();
      if (
        user === null ||
        user === undefined ||
        user.value === null ||
        user.value === undefined
      )
        return false;
      const result = await user.value.getIdTokenResult();
      if (result.claims.admin === true) isAdmin.value = true;
      return isAdmin.value;
    };

    const hasMod = async () => {
      const isMod = ref(false);
      const user = await useCurrentUser();
      if (user.value === null) {
        return false;
      }
      if (user.value === undefined) {
        return false;
      }
      const result = await user.value.getIdTokenResult();
      if (result.claims.mod === true) isMod.value = true;
      return isMod.value;
    };

    return { hasAdmin, hasMod };
  });
}
