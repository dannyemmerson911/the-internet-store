export default function Login() {
    const signs = document.querySelectorAll('x-sign')
    const randomIn = (min, max) => (
    Math.floor(Math.random() * (max - min + 1) + min)
    )

    const mixupInterval = el => {
    const ms = randomIn(2000, 4000)
    el.style.setProperty('--interval', `${ms}ms`)
    }

    signs.forEach(el => {
    mixupInterval(el)
    el.addEventListener('webkitAnimationIteration', () => {
        mixupInterval(el)
    })
    })

    return (
        <div className="loginPageContainer">
            <x-sign>Welcome to The Internet Store</x-sign>
            <x-sign>Proudly Offering a Truly Strange Collection of Products Since 2022</x-sign>
            <x-sign>Sign In</x-sign>
                <form>
                    <input
                        className="input"
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        className="input"
                        type="password"
                        placeholder="Password"
                    />
                    <button>Log In</button>
                </form>
                <a className="createAcc">create an account</a>
        </div>
    )
}