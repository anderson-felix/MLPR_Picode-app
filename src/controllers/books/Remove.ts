import { api } from "../../utils/api";

export const Remove = async (_id: string) => {
  await api.delete(`/book/${_id}`);
};
