const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
    { id: 4, name: 'New users annually', value: '46,000' },
]

export default function Stat() {
    return (
        <div className="bg-[#e7e5e4] py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-8 text-center lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-1">
                            <dt className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] text-[#535353]">{stat.name}</dt>
                            <dd className="order-first text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
