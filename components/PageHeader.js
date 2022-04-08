export default function PageHeader({pageTitle}) {
    return (
        <div className="relative bg-spLightGrey">
          <div className="max-w-7xl mx-auto px-4 py-[8em] flex justify-between">
            <div className='space-y-5'>
              <h1 className='text-spBlueGrey text-6xl font-thin'>{pageTitle}</h1>
            </div>
          </div>
        </div>
    )
}