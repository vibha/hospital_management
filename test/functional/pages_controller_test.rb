require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get medical_services" do
    get :medical_services
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

  test "should get departments" do
    get :departments
    assert_response :success
  end

  test "should get carrer" do
    get :carrer
    assert_response :success
  end

  test "should get appointments" do
    get :appointments
    assert_response :success
  end

end
