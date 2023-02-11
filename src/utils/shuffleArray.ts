export default function shuffleArray(arr:Array<any>) {
  arr.forEach((i) => {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }); 

  return arr;
}
