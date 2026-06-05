# SOTA scheduler algorithm based on best times
def get_best_hour(day_of_week):
    # Best hours for tech niche posting
    return 12 if day_of_week < 5 else 18
