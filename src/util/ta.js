export function getIfrUser () {
  let user = sessionStorage.getItem('user');
  if (user) return user;
}
export function getIfrId () {
  let user = sessionStorage.getItem('uid');
  if (user) return user.opId;
}

export const deepCopy = source => {
  var sourceCopy = source instanceof Array ? [] : {};
  for (var item in source) {
    sourceCopy[item] =
      typeof source[item] === 'object' ? deepCopy(source[item]) : source[item];
  }
  return sourceCopy;
};
