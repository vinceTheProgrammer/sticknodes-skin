export enum CategoryType {
  CHECKBOX = "checkbox",
  MULTI = "multi",
}

type Category = {
  label: string;
  type: CategoryType;
  filters: string[];
};

export type Categories = {
  skins: Category[];
  users: Category[];
  default: Category[];
};
