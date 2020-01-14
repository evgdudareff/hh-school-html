//для ios необходимо превентить события скролла (для попапа на mobile)
export const touchHandler = e => {
  e.preventDefault();
};
