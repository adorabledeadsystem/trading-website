const SettingsWindow = () => {
    return (
        <div className="grid grid-cols-2 gap-6 p-3 text-left pb-14">
            <div className="font-medium font-base">Настройки региона</div>
            <div className="font-medium font-base">Дизайн интерфейса</div>
            <div>
                <div className="text-sm mb-3">Часовой пояс</div>
                <select className="border border-solid border-light w-full pl-3 py-2 text-sm">
                    <option>+7:00</option>
                    <option>+7:00</option>
                    <option>+7:00</option>
                </select>
            </div>
            <div>
                <div className="text-sm mb-3">Масштаб</div>
                <select className="border border-solid border-light w-full pl-3 py-2 text-sm">
                    <option>+7:00</option>
                    <option>+7:00</option>
                    <option>+7:00</option>
                </select>
            </div>
            <div>
                <div className="text-sm mb-3">Язык интерфейса</div>
                <select className="border border-solid border-light w-full pl-3 py-2 text-sm">
                    <option>Русский</option>
                    <option>Английский</option>
                </select>
            </div>
        </div>
    )
}

export default SettingsWindow