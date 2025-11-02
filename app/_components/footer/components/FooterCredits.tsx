export default function FooterCredits() {
  const persianYear = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
  }).format(new Date());

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
      <span>ساخته‌شده با ❤️ توسط پیمان</span>
      <span> © نوبینو {persianYear} — تمامی حقوق محفوظ است.</span>
    </div>
  );
}
