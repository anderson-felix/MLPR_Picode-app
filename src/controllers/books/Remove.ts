/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { api } from '../../utils/api';

export const Remove = async (_id: string) => {
  await api.delete(`/book/${_id}`);
};
