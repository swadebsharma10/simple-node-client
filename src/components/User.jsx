

const User = ({user, idx}) => {
    return (
        <div className="flex justify-between items-center">
            <p className="flex-1">{idx+1}</p>
            <h2 className="flex-1">Name: {user.name}</h2>
            <p className="flex-1">Email: {user.email}</p>
        </div>
    );
};

export default User;