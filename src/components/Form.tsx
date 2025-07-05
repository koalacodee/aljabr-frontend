export default function Form() {
  return (
    <div className="space-y-2">
      <form className="p-12 grid gap-12">
        <div className="space-y-2">
          <label htmlFor="name" className="text-lg flex justify-between">
            <span>الأسم</span>
            <span>Name</span>
          </label>
          <input
            id="name"
            placeholder="أدخل الأسم"
            className="w-full py-2 px-4 rounded-lg text-black/80 bg-white"
            type="text"
            defaultValue=""
            name="name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="city" className="text-lg flex justify-between">
            <span>المدينة</span>
            <span>City</span>
          </label>
          <input
            id="city"
            placeholder="أدخل المدينة"
            className="w-full py-2 px-4 rounded-lg text-black/80 bg-white"
            type="text"
            defaultValue=""
            name="city"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-lg flex justify-between">
            <span>الجوال</span>
            <span>Phone</span>
          </label>
          <input
            id="phone"
            placeholder="أدخل الجوال"
            className="w-full py-2 px-4 rounded-lg text-black/80 bg-white"
            type="text"
            defaultValue=""
            name="phone"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="code" className="text-lg flex justify-between">
            <span>الرمز</span>
            <span>Code</span>
          </label>
          <input
            id="code"
            placeholder="أدخل الرمز"
            className="w-full py-2 px-4 rounded-lg text-black/80 bg-white"
            type="text"
            defaultValue=""
            name="code"
          />
        </div>
        <audio autoPlay className="w-full m-auto">
          <source
            src="https://pub-6863d615c3dc4f98a871cd5caf312f0a.r2.dev/start.mp3"
            type="audio/mp3"
          />
        </audio>
      </form>
    </div>
  );
}
