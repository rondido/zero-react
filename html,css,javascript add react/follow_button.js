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
    backgroundColor: "black",
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
  return React.createElement(
    "div",
    {
      onClick: () => setFollwing(!following),
      style: following ? follwingBtnStyle : followBtnStyle,
    },
    following ? "follwng" : "Follow"
  );
}

const domContainer = document.querySelector("#follow_button_container");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(FollowButton));
