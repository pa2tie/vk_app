import { types } from "mobx-state-tree";

const Story = types.model({
  title: types.string,
  avatar: types.string
});
