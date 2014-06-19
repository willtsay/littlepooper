class GamesController < ApplicationController
  before_filter :check_logged
  layout 'game'

  def home
  end

  def set_pet_stats
    current_user.update_pet_stats(params)
    render nothing: true
  end

  def get_pet_stats
    render json: {happiness: current_user.pet_happiness, strength: current_user.pet_strength, nomnom: current_user.pet_nomnom, xp: current_user.pet_xp}
  end

  def flappy_high_score
    current_user.update_flappy_stats_and_xp(params[:score].to_i)
    render nothing: true
  end

  def flappy_high_scores
    render json: {highscores: User.highscores.to_json}
  end

  def set_bugs_killed
    current_user.update_bug_stats_and_xp(params[:bugs_killed].to_i)
    render nothing: true
  end

  def rankings
    rankings = User.rankings
    render json: {rankings: rankings.to_json}
  end
  
end