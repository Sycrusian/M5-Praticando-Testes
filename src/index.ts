export const removeBearer = (payload: string) => {
  return payload.replace("Bearer ", "").replace("Bearer", "");
}