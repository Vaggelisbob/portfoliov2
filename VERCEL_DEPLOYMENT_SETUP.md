# Setting Up Automatic Vercel Deployment with GitHub Actions

This guide will help you set up automatic deployments to your Vercel project when you push to your GitHub repository.

## Step 1: Generate a Vercel Token

1. Go to https://vercel.com/account/tokens
2. Click "Create" to create a new token
3. Give it a name like "GitHub Actions Deployment"
4. Set the scope to "Full Account" (or limit it if you prefer)
5. Click "Create Token"
6. **IMPORTANT**: Copy the token immediately - you won't be able to see it again!

## Step 2: Add the Token to GitHub Secrets

1. Go to your GitHub repository (https://github.com/Vaggelisbob/portfoliov2)
2. Click on "Settings" tab
3. In the left sidebar, click on "Secrets and variables" > "Actions"
4. Click on "New repository secret"
5. For the Name, enter `VERCEL_TOKEN`
6. For the Value, paste the token you copied from Vercel
7. Click "Add secret"

## Step 3: Link Your Vercel Project (Optional)

If you want to link to a specific Vercel project, you can add another secret:

1. Get your Vercel project ID from your project settings page
2. Add another GitHub secret with name `VERCEL_PROJECT_ID` and the value as your project ID
3. Add another GitHub secret with name `VERCEL_ORG_ID` (find this in your Vercel account settings)

## Step 4: Push the GitHub Action

The GitHub Action has already been committed to your repository. All you need to do is push it:

```
git push origin master
```

After completing these steps, your GitHub Action will automatically deploy your project to Vercel whenever you push to the master branch! 