type Profile = { name: string; age: number; bio: string }

function rateProfile(profile: Profile, swipeLeft: () => void, swipeRight: () => void) {
	return profile.bio.includes('TypeScript') ? swipeRight() : swipeLeft()
}

export { rateProfile }
