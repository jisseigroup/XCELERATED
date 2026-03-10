import PageHero from '../../components/PageHero';

export const metadata = { title: 'XGX' };

export default function XgxPage() {
  return (
    <>
      <PageHero
        eyebrow="XGX"
        title="Group exercise that creates energy, accountability, and consistent effort."
        text="XCELERATED Group Exercise is built for people who want coach-led training in a motivating environment without losing structure and purpose."
      />

      <section className="section">
        <div className="container grid-2">
          <div className="copy-block reveal-up">
            <span className="eyebrow">Group environment</span>
            <h3>Shared effort can drive consistency and momentum.</h3>
            <p>
              XGX delivers structured sessions in a supportive setting where participants can train with others, stay accountable, and build fitness through repeated, coach-guided effort. The group setting adds energy while still protecting the quality and flow of the workout.
            </p>
            <p>
              Sessions can be designed around conditioning, total-body fitness, movement competency, endurance, or general athletic development depending on the group and schedule.
            </p>
          </div>
          <div className="copy-block reveal-up">
            <span className="eyebrow">Best for</span>
            <h3>People who thrive in a positive, coach-led training culture.</h3>
            <p>
              Group exercise is ideal for participants who want consistency, motivation, and community without sacrificing proper structure. It can also be a strong entry point for those who want guided exercise in a format that feels social and engaging.
            </p>
            <p>
              Pricing can be customized based on class format, schedule, and enrollment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
