//Card 컴포넌트를 사용
import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title="반이네" backgroundColor="#4ea04e">
            <p>안녕하세요!!</p>
            <p>반이는 견생 7개월차 말썽꾸러기 입니다.</p>
        </Card>
    );
}

export default ProfileCard;