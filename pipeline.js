// Content Pipeline for Mission Control
const pipelineData = {
  idea: [
    { id: 1, title: "VCs don't actually invest in tech, they invest in narratives", date: "Feb 19" },
    { id: 2, title: "Age of Empires economy vs. DeFi yields comparison", date: "Feb 19" }
  ],
  written: [
    { id: 3, title: "THE DEV IS A CRISIS ACTOR", date: "Feb 19", type: "deep-trench" },
    { id: 4, title: "THE GREAT LAMBO CONSPIRACY", date: "Feb 19", type: "deep-trench" },
    { id: 5, title: "THE THREE AM DELOREAN", date: "Feb 19", type: "deep-trench" }
  ],
  ready: [],
  posted: [
    { id: 6, title: "Bio updated: 40. Florida. A crab named Jean-Clawed...", date: "Feb 17" }
  ]
};

function renderPipeline() {
  const stages = ['idea', 'written', 'ready', 'posted'];
  stages.forEach(stage => {
    const container = document.getElementById(`pipeline-${stage}`);
    if (!container) return;
    const items = pipelineData[stage] || [];
    if (items.length === 0) {
      container.innerHTML = '<div class="pipeline-empty">Drop here</div>';
    } else {
      container.innerHTML = items.map(item => `
        <div class="pipeline-item" data-id="${item.id}">
          <div class="pipeline-item-title">${item.title}</div>
          <div class="pipeline-item-meta">
            <span>${item.date}</span>
            ${item.type ? `<span class="pipeline-tag">${item.type}</span>` : ''}
          </div>
        </div>
      `).join('');
    }
  });
}

// Enhanced action buttons
function spawnSession() {
  alert('🦀 Spawn Session: Creating new sub-agent...');
}

function checkCron() {
  const jobs = [
    { name: 'Trench Scout', time: '7:00 AM', status: 'daily' },
    { name: 'Pattern Scout', time: '6:30 AM', status: 'daily' },
    { name: 'Daily Tweet Drafts', time: '6:00 AM', status: 'daily' },
    { name: 'Morning Market Brief', time: '10:00 AM', status: 'daily' },
    { name: 'Lunch News Digest', time: '12:00 PM', status: 'daily' },
    { name: 'Evening News Digest', time: '6:00 PM', status: 'daily' },
    { name: 'Memory Janitor', time: '9:00 AM', status: 'Sundays' }
  ];
  let msg = '📅 CRON JOBS\n\n';
  jobs.forEach(j => {
    msg += `${j.time} — ${j.name} (${j.status})\n`;
  });
  alert(msg);
}

function viewMemory() {
  alert('🧠 Memory Search — coming soon!');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('pipeline-idea')) renderPipeline();
  });
} else {
  if (document.getElementById('pipeline-idea')) renderPipeline();
}
