const WriterInfo = (props: any) => {
    const { user } = props
    return (
        <div className="writerInfo" style={{
            backgroundColor: 'yellow',
            padding: '10px'}}
        >
            <img src={user.avatar} style={{
                    display: 'inline-block',
                    borderRadius: '50%', 
                    width: '60px',
                    height: '60px'
            }} />
            <div style={{
                display: 'inline-block',
                paddingLeft: '20px'
            }}>
                <div>Email: {user.email}</div>
                <div>First Name: {user.first_name}</div>
                <div>Last Name{user.last_name}</div>
            </div>
        </div>
    )
};

export default WriterInfo;