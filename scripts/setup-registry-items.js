const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function installComponent(componentName) {
  try {
    console.log(`Installing ${componentName}...`);
    execSync(`npx shadcn@latest add ${componentName}`, { stdio: 'inherit' });
    console.log(`✅ ${componentName} installed successfully`);
  } catch (error) {
    console.error(`❌ Failed to install ${componentName}:`, error.message);
  }
}

async function setupRegistryItems() {
  console.log('Setting up registry items...');
  
  // Install selected components

  
  console.log('Registry setup complete!');
}

setupRegistryItems().catch(console.error);