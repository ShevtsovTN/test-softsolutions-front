export function minLength(num) {
  return (val) => val.length >= num;
}
export function maxLength(num) {
  return (val) => val.length <= num;
}
export function required(val) {
  return !!val;
}
export function email(val) {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return EMAIL_REGEXP.test(val);
}

export function minLengthFile(fileLength) {
  return (val) => {
    console.log(val);
    // return val >= fileLength;
  };
}

export function maxLengthFile(fileLength) {
  return (val) => {
    console.log(val);
    // return val <= fileLength;
  };
}
