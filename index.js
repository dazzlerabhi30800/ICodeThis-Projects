const notificationData = [
  {
    img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    name: "William Philips",
    info: "Uploaded 4 new pictures into album",
    highlight: "Landscape",
    new: true,
    time: "2 minutes ago",
  },
  {
    img: 'https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80',
    name: "Shane Willis",
    info: "Rated your page",
    highlight: "Ildiesign",
    new: true,
    time: "2 minutes ago"
  },
  {
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    name: "Harriet Waters",
    info: "Commented on your Post",
    highlight: "Breakfast",
    new: false,
    reply: "Looks Delicious!",
    time: "Yesterday"
  },

  {
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    name: "Harriet Waters",
    info: "Uploaded 6 new pictures into album Trips 2018",
    time: "Yesterday",
    new: false,
  },
];

function App() {
  return (
    <>
      <Header />
      <MainComponent />
    </>
  );
}

function Header() {
  return (
    <header >
      <div className="bell-icon">
        <i className="fas fa-bell"></i>
      </div>
    </header>
  );
}

function MainComponent() {
  return (
    <main>
      <div className="heading">
        <h1>Notifications</h1>
      </div>
      <div className="notification-wrapper">
        {notificationData.map((item, index) => (
          <NotificationComp key={index} item={item} />
        ))}
      </div>
      <button className="view-btn">view all</button>
    </main>
  )
}


function NotificationComp({ item }) {
  return (
    <div className="notification-comp">
      <img src={item.img} alt={item.name} />
      <div className="info">
        <div className="info-header">
          <h2>{item.name}</h2>
          {item.new &&
            <span className="new">New</span>
          }
        </div>
        <p className="status">{item.info} {item.highlight && <span className="highlight">{item.highlight}</span>}</p>
        {item.reply && <p className="italic-text">"{item?.reply}"</p>}
        <p className="time">{item.time}</p>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
