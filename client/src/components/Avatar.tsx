type Props = {
  name: string;
};

const Avatar = ({ name }: Props) => {
  return (
    <div className="avatar">
      {name.split(" ").map((it) => it[0].toUpperCase())}
    </div>
  );
};

export default Avatar;
