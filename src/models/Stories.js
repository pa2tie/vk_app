import { types } from "mobx-state-tree";

export const Story = types.model({
  title: types.string,
  avatar: types.string
});

export const Stories = types.model({
  items: types.optional(types.array(Story), [])
});
