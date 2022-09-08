// React Component!
// Follow <-> following
function FollowButton() {
  //following이라는 변수를 만들고 초기값은 false
  //following의 상태값관리하기 위해 setFollwing
  const [following, setFollwing] = React.useState(false);

  const commonBtnStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "12px",
    right: "16px",
    width: "100px",
    height: "36px",
    borderRadius: "9999px",
    fontWeight: "bold",
  };

  const followBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: "blue",
    color: "white",
  };

  const follwingBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: "white",
    color: "black",
    border: "1px solid #cfd9be",
  };

  //react component 생성
  //3번째 인자는 보여지는  div태그 안에 있는 text
  //javascript 문법으로 작성되 어 있기 때문에 -> jsx문법으로변경
  return (
    <div
      onClick={() => setFollwing(!following)}
      style={following ? follwingBtnStyle : followBtnStyle}
    >
      {following ? "follwng" : "Follow"}
    </div>
  );
}
export default FollowButton;
