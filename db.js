const casual = require('casual')

module.exports = () => {
    const data = { User: [] }

    casual.define('User', id => ({
        id: id,
        Username: casual.username,
        Email: casual.email,
        Password: casual.password,
        Balance: casual.double(from = 500, to = 10000),
        DailyIncome: casual.double(from = 100, to = 3000),
        IsEmailVerified: casual.boolean,
        IsDoc: casual.boolean,
        IsDocVerified: casual.boolean
    }))

    // Create 100 users
    for (let i = 0; i < 40; i++) {
        data.User.push(casual.User(i))
    }
    return data
}