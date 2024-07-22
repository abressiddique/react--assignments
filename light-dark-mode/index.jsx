import useLocalStorage from "./uselocalstorage";
import "./styles.css"
export default function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    console.log(theme);

    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <p>Hello, world!</p>
                <button onClick={handleToggleTheme}>Change the theme</button>
            </div>
        </div>
    );
}
