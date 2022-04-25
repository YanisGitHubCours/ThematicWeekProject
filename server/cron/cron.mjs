import { CronJob } from "cron"

console.log('Before job instantiation');
const job = new CronJob('0 * * * * *', function() {
	
});

console.log('After job instantiation');
job.start();

// Créer une requête dans Message pour le cronjob qui va renvoyer le status des messages