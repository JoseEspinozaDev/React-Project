import Header from "./components/header";
import TwitterCard from "./components/TwitterCard";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <TwitterCard
          name="Astro"
          userName="@astro"
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KhCojo9MAD9u7-vbHjYYFzD69By9d-PWcw&s"
          isFollowing
        />
        <TwitterCard
          name="React"
          isFollowing
          userName="@React"
          avatar="https://images.icon-icons.com/2108/PNG/512/react_icon_130845.png"
        />
        <TwitterCard
          name="Angular"
          userName="@Angular"
          avatar="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci80YWI1YjNjOTg2MmZjOTFlNTFlMmU2ZjY5YTY2ZTk5Mz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.vn16SpUv_a299JVQYFcyqEx22Z2eknMUgaL2l2ilARU"
          isFollowing
        />
        <TwitterCard
          name="Vite"
          userName="@Vite"
          avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png"
          isFollowing
        />
      </div>
    </>
  );
}

export default App;
